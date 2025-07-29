import LayoutShell from "@/layouts/LayoutShell";

const ResumePage = () => {
  return (
    <LayoutShell>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-lg text-gray-700">This is the resume page.</p>
      </div>
    </LayoutShell>
  );
};

export default ResumePage;
