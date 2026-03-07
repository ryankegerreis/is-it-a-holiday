import React from "react";

interface HolidayProps {
  name: string;
  type: string[];
}

export function Holiday({ name, type }: HolidayProps) {
  return (
    <div className="w-screen h-screen bg-green-300 flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Yep Today's a Holiday!</h2>
        <h1 className="text-4xl font-bold text-white mb-8">Today is {name}</h1>
      </div>
      <div className="mb-8">
        <svg className="w-16 h-16 mx-auto text-white" viewBox="0 0 64 64">
          <g fill="currentColor">
            <path d="m28.345 41.676c-1.202 0-2.332-.469-3.182-1.318l-17.66-17.662c-1.754-1.754-1.754-4.609 0-6.363.85-.85 1.98-1.318 3.183-1.318s2.333.468 3.182 1.318l14.477 14.479 14.478-14.479c.85-.85 1.979-1.318 3.182-1.318s2.332.468 3.182 1.318c.851.85 1.318 1.98 1.318 3.182s-.468 2.332-1.318 3.182l-17.659 17.658c-.851.853-1.982 1.321-3.183 1.321zm-17.659-24.661c-.668 0-1.296.26-1.769.732-.975.975-.975 2.561 0 3.535l17.66 17.661c.936.936 2.557.948 3.504.029l17.69-17.69c.473-.473.732-1.1.732-1.768s-.26-1.295-.732-1.768c-.945-.944-2.59-.944-3.535 0l-15.891 15.894-15.891-15.893c-.473-.472-1.1-.732-1.768-.732z" />
          </g>
        </svg>
      </div>
      <div className="text-center mt-8 max-w-md">
        <h3 className="text-2xl font-bold text-white mb-2">About {name}</h3>
        <h4 className="text-xl text-white">{name} is a {type[0]}.</h4>
      </div>
    </div>
  );
}
