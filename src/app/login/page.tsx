import { LoginForm } from "./form"

export default function LoginPage() {
  return (
    <>
      <section className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
          <div className="md:w-8/12 lg:w-1/3 px-8 py-10">
            <h1 className="text-3xl mb-4 font-semibold dark:text-slate-300 text-slate-700 text-center">
              Login
            </h1>
            <LoginForm />
            <p className="text-center mt-5 text-sm text-slate-500">
              Next.js 13 Starter Template
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
