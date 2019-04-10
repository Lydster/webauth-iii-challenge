exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { username: "Donny Darko", password: "stinker", department: "emo" },
    {
      username: "Tom Cruise",
      password: "scientologyRulez",
      department: "scientology"
    },
    {
      username: "Old Bicycle",
      password: "hotWheels101",
      department: "scientology"
    }
  ]);
};
