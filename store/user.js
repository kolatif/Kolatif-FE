export const state = () => ({
  user: {
    name: 'Joseph Joestar',
    role: 'mentee',
    experience: [
      {
        id: 1,
        jobTitle: 'Head of Education Division',
        company: 'Himpunan Mahasiswa Ilmu Komputer',
        duration: ['September 2019', 'Present'],
      },
      {
        id: 2,
        jobTitle: 'Software Engineer',
        company: 'PT. HeyyOneNetwork',
        duration: ['September 2018', 'September 2019'],
      },
    ],
    education: [
      {
        campus: 'IPB University',
        major: 'Computer Science',
        year: ['September 2015', 'September 2019'],
      },
      {
        campus: 'SMAN 78 Jakarta',
        major: 'Natural Science',
        year: ['September 2012', 'September 2015'],
      },
    ],
    expertise: [
      'Frontend Development',
      'Mobile Development',
      'UI Design',
      'Product Design',
    ],
    availability:
      'Monday to Friday above 8.00 P.M. If you want to reschedule please contact me at joseph@kolatif.com',
  },
})

export const mutations = {
  // TODO: Edit User
  // TODO: Set User to State
  // TODO: Delete User from State
}

export const actions = {
  // TODO: Edit User
  // TODO: Set User to State
  // TODO: Delete User from State
}
