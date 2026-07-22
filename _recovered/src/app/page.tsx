export default function Home() {
  return (
    <main className="relative flex min-h-[calc(100vh-108px)] flex-1 flex-col justify-end overflow-hidden bg-[#1a2a3a]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(10,20,30,0.75) 0%, rgba(10,20,30,0.25) 45%, rgba(10,20,30,0.15) 100%), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-16 pt-32 lg:px-8 lg:pb-20">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
          We fight for refugees and asylum seekers.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/90 sm:text-xl">
          Welcome the stranger. Protect the refugee.
        </p>
      </div>
    </main>
  );
}
