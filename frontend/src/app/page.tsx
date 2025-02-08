import TaskDisplay from "@/components/task/TaskDisplay";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full gap-8 row-start-2 items-center sm:items-start">
        <TaskDisplay />
      </main>
    </div>
  );
}
