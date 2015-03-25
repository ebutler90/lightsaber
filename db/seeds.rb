require 'faker'

10.times do
  Sealion.create({name: Faker::Name.name, quirk: Faker::Lorem.sentence, email: Faker::Internet.email})
end