"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z.string().email("Email invalide"),
  firstName: z.string().min(2, "Prénom trop court"),
  userType: z.enum(["host", "guest"]),
});

export async function joinWaitlist(formData: FormData) {
  const validatedFields = waitlistSchema.safeParse({
    email: formData.get("email"),
    firstName: formData.get("firstName"),
    userType: formData.get("userType"),
  });

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors };
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware handling sessions.
          }
        },
      },
    }
  );

  const { error } = await supabase.from("waitlist").insert({
    email: validatedFields.data.email,
    first_name: validatedFields.data.firstName,
    user_type: validatedFields.data.userType,
  });

  if (error) {
    return { success: false, message: "Une erreur est survenue. Veuillez réessayer." };
  }

  return { success: true, message: "Bienvenue dans le cercle fermé !" };
}
