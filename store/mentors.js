export const state = () => ({
  mentors: [
    {
      id: 1,
      name: 'Joseph Joestar',
      role: 'mentor',
      rating: 5,
      reviews: 150,
      workExperience: [
        {
          id: 1,
          jobTitle: 'Software Engineer',
          company: 'PT. Kolaborasi dan Aktif Internasional',
          startDate: 'September 2019',
          endDate: 'present',
        },
        {
          id: 2,
          jobTitle: 'Software Engineer',
          company: 'PT. HeyyOneNetwork',
          startDate: 'September 2018',
          endDate: 'September 2019',
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          startDate: 'September 2015',
          endDate: 'September 2019',
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
    {
      id: 2,
      name: 'Joseph Joestar',
      rating: 5,
      reviews: 150,
      workExperience: [
        {
          jobTitle: 'Software Engineer',
          company: 'Kolatif',
          startDate: 'September 2019',
          endDate: 'present',
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          startDate: 'September 2015',
          endDate: 'September 2019',
        },
      ],
      expertise: [
        'Frontend Development',
        'Mobile Development',
        'UI Design',
        'Product Design',
      ],
    },
    {
      id: 3,
      name: 'Joseph Joestar',
      rating: 5,
      reviews: 150,
      workExperience: [
        {
          jobTitle: 'Software Engineer',
          company: 'Kolatif',
          startDate: 'September 2019',
          endDate: 'present',
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          startDate: 'September 2015',
          endDate: 'September 2019',
        },
      ],
      expertise: [
        'Frontend Development',
        'Mobile Development',
        'UI Design',
        'Product Design',
      ],
    },
    {
      id: 4,
      name: 'Joseph Joestar',
      rating: 5,
      reviews: 150,
      workExperience: [
        {
          jobTitle: 'Software Engineer',
          company: 'Kolatif',
          startDate: 'September 2019',
          endDate: 'present',
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          startDate: 'September 2015',
          endDate: 'September 2019',
        },
      ],
      expertise: [
        'Frontend Development',
        'Mobile Development',
        'UI Design',
        'Product Design',
      ],
    },
    {
      id: 5,
      name: 'Joseph Joestar',
      rating: 5,
      reviews: 150,
      workExperience: [
        {
          jobTitle: 'Software Engineer',
          company: 'Kolatif',
          startDate: 'September 2019',
          endDate: 'present',
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          startDate: 'September 2015',
          endDate: 'September 2019',
        },
      ],
      expertise: [
        'Frontend Development',
        'Mobile Development',
        'UI Design',
        'Product Design',
      ],
    },
    {
      id: 6,
      name: 'Joseph Joestar',
      rating: 5,
      reviews: 150,
      workExperience: [
        {
          jobTitle: 'Software Engineer',
          company: 'Kolatif',
          startDate: 'September 2019',
          endDate: 'present',
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          startDate: 'September 2015',
          endDate: 'September 2019',
        },
      ],
      expertise: [
        'Frontend Development',
        'Mobile Development',
        'UI Design',
        'Product Design',
      ],
    },
  ],
})

export const getters = {
  allMentors: (state) => state.mentors,
}

export const mutations = {
  saveMentors(state, mentors) {
    state.mentors = mentors
  },
}

export const actions = {
  loadMentors({ commit }) {
    // TODO: API call to get mentors
    // TODO: commit to saveMentors method
  },
  // bookMentor({commit}, book){
  //   //TODO: Add Book to the API
  //   // eslint-disable-next-line no-console
  //   console.log(book)

  // }
}
