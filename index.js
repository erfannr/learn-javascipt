// const biodata = {
//     name: "Laila Ali",
//     age: 20,
//     collage: "University of Indonesia",
//     hobbies: ["swimming", "running", ["hiking", ["shopping", "traveling"]], "sleeping"],
//     address: {
//       street: "Kemang Raya",
//       province: "Jakarta Selatan",
//       country: "Indonesia"
//     },
//    contact: {
//      email: "laila@ali.com",
//      phone: {
//        countryCode: "62",
//        number: ["13123","7968"]
//      }
//    },
//    skills: {
//      language: ["English", "French", "Indonesia"],
//      programming: [{language: "JavaScript", framework: "React.js"}, "Java", "C++"]
//    }
//   }
  
  
  // Write your code down below! Do not change the code above!
  
//   console.log(`Hai, my name is ${biodata.name}, I studied in ${biodata.collage}.
//   My Programming skills are ${biodata.skills.programming[0].language} including using its framework ${biodata.skills.programming[0].framework}
//   , ${biodata.skills.programming[1]} and ${biodata.skills.programming[2]}. During School, I compete in many sports including ${biodata.hobbies[2][0]} and ${biodata.hobbies[1]}. 
//   My Hobbies are ${biodata.hobbies[3]} and also ${biodata.hobbies[2][1][0]}
//   Right now I live at ${biodata.address.street}, ${biodata.province} - ${biodata.country}.
//   You can reach me on my email ${biodata.contact.email} or my phone number ${biodata.contact.phone.countryCode}-${biodata.contact.phone.number[0]}${biodata.contact.phone.number[1]}.
//   Thank You and have a nice day`)

//   console.log(`Hai, my name is ${biodata.name}, I studied in ${biodata.collage}.
//   My Programming skills are ${biodata.skills.programming[0].language} including using its framework ${biodata.skills.programming[0].framework}
//   , ${biodata.skills.programming[1]} and ${biodata.skills.programming[2]}. During School, I compete in many sports including ${biodata.hobbies[2][0]} and ${biodata.hobbies[1]}. 
//   My Hobbies are ${biodata.hobbies[3]} and also ${biodata.hobbies[2][1][0]}
//   Right now I live at ${biodata.address.street}, ${biodata.address.province} - ${biodata.address.country}.
//   You can reach me on my email ${biodata.contact.email} or my phone number ${biodata.contact.phone.countryCode}-${biodata.contact.phone.number[0]}${biodata.contact.phone.number[1]}.
//   Thank You and have a nice day`);




  let data = [
    [4, ["Jakarta"], ["Germany"], { address: "Kemang No." }],
    { name: "Joko Suprapto" },
    "001",
    "009",
    10,
    2013,
    [
      24,
      {
        socialMedia: {
          instagram: "joko_s_instagram",
          facebook: "joko_s_facebook"
        }
      }
    ]
  ];

//   Saya Joko Suprapto, saya tinggal di Jakarta dan beralamat Jalan Kemang No. 10 RT001/RW009.
//   Saya lulusan 2013 Germany Institute umur saya sekarang 24 + 4 jadi 28 tahun. 
//   Jika Anda ingin mengenal jauh diri saya silahkan follow sosial media saya dengan akun instagram joko_s_instagram dan facebook saya joko_s_facebook

console.log( `Saya ${data[1].name}), saya tinggal di ${data[0][1]} dan beralamat ${data[0][3].address} ${data[4]} RT${data[2]}/RW${data[3]}`)
console.log (`Saya lulusan ${data[5]} ${data[0][2]} Institute umur saya sekarang ${data[6][0]}+${data[0][0]} jadi ${data[6][0]+data[0][0]} `)
console.log (`Jika Anda ingin mengenal jauh diri saya silahkan follow sosial media saya dengan akun instagram ${data[6][1].socialMedia.instagram} dan facebook saya ${data[6][1].socialMedia.facebook}`)
