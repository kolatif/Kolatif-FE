export const state = () => ({
  mentors: [
    {
      id: 1,
      name: 'Joseph Joestar',
      rating: 5,
      reviews: 150,
      workExperience: [
        {
          jobTitle: 'Software Engineer',
          company: 'PT. Kolaborasi dan Aktif Internasional',
          duration: ['September 2019', 'Present'],
        },
        {
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
      ],
      expertise: [
        'Frontend Development',
        'Mobile Development',
        'UI Design',
        'Product Design',
      ],
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
          workDate: ['September 2019', 'Present'],
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          year: ['September 2015', 'September 2019'],
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
          workDate: ['September 2019', 'Present'],
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          year: ['September 2015', 'September 2019'],
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
          workDate: ['September 2019', 'Present'],
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          year: ['September 2015', 'September 2019'],
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
          workDate: ['September 2019', 'Present'],
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          year: ['September 2015', 'September 2019'],
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
          workDate: ['September 2019', 'Present'],
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          year: ['September 2015', 'September 2019'],
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
}
