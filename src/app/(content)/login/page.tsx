"use client";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen text-white bg-gray-300">
      <div className="relative w-full max-w-sm p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-md space-y-5 mb-36">

        <button
          onClick={() => router.back()}
          className="absolute cursor-pointer top-4 right-4 flex items-center justify-center w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Iniciar sesión</h1>
          <p className="text-sm text-zinc-500">Bienvenido de nuevo</p>
        </div>

        {/* Email */}
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "El correo es requerido"
                : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                  ? "Correo inválido"
                  : undefined,
          }}
        >
          {(field) => (
            <div className="space-y-1">
              <label className="text-sm font-medium">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@email.com"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border bg-transparent outline-none transition-colors
                  ${field.state.meta.errors.length
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-300 dark:border-zinc-700 focus:border-blue-500"
                  }`}
              />
              {field.state.meta.errors[0] && (
                <p className="text-xs text-red-500">{field.state.meta.errors[0]}</p>
              )}
            </div>
          )}
        </form.Field>

        {/* Password */}
        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "La contraseña es requerida"
                : value.length < 6
                  ? "Mínimo 6 caracteres"
                  : undefined,
          }}
        >
          {(field) => (
            <div className="space-y-1">
              <label className="text-sm font-medium">Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border bg-transparent outline-none transition-colors
                  ${field.state.meta.errors.length
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-300 dark:border-zinc-700 focus:border-blue-500"
                  }`}
              />
              {field.state.meta.errors[0] && (
                <p className="text-xs text-red-500">{field.state.meta.errors[0]}</p>
              )}
            </div>
          )}
        </form.Field>

        {/* Submit */}
        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <button
              disabled={!canSubmit || isSubmitting}
              onClick={() => form.handleSubmit()}
              className="w-full py-2.5 rounded-lg bg-accent text-white font-semibold
                hover:bg-accent-hover cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Cargando..." : "Iniciar sesión"}
            </button>
          )}
        </form.Subscribe>
      </div>
    </div>
  );
}