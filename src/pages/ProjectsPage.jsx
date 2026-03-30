import React from "react";

const ProjectsPage = () => {
  const projects = [
    { name: "Website Redesign", status: "In Progress", team: "Team A" },
    { name: "Mobile App", status: "Completed", team: "Team B" },
    { name: "Marketing Campaign", status: "Pending", team: "Team C" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
      <p className="text-gray-500">Manage all your projects here.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border-b">Project Name</th>
              <th className="text-left p-3 border-b">Status</th>
              <th className="text-left p-3 border-b">Team</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition">
                <td className="p-3 border-b">{proj.name}</td>
                <td
                  className={`p-3 border-b font-medium ${
                    proj.status === "Completed"
                      ? "text-green-600"
                      : proj.status === "In Progress"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {proj.status}
                </td>
                <td className="p-3 border-b">{proj.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPage;
