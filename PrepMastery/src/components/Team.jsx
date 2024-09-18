const people = [
  {
    name: "Ms. D.D. Awasekar",
    role: "Guide/ Mentor",
    imageUrl: "profile.png",
  }
  ,{
    name: "Simran Mehta",
    role: "Content Creator",
    imageUrl: "profile.png",
  },
  {
    name: "Gururaj Kulkarni",
    role: "BackEnd Dev",
    imageUrl: "profile.png",
  },
  {
    name: "Sanskar Kannurkar",
    role: "UI/ UX Designer",
    imageUrl: "profile.png",
  },
  {
    name: "Yash Nagarkar",
    role: "Frontend Engineer",
    imageUrl: "profile.png",
  }
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32 border-b-2">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 ">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team is made up of the best and brightest minds in the industry.
            Together, we`&apos;`re dedicated to helping you succeed.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
