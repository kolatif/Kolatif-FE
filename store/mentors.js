export const state = () => ({
  mentors: [
    {
      id: 1,
      name: 'Joseph Joestar',
      rating: 5,
      reviews: 150,
      jobTitle: 'Software Engineer',
      company: 'Kolatif',
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
      jobTitle: 'Software Engineer',
      company: 'Kolatif',
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
      jobTitle: 'Software Engineer',
      company: 'Kolatif',
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
      jobTitle: 'Software Engineer',
      company: 'Kolatif',
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
      jobTitle: 'Software Engineer',
      company: 'Kolatif',
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
      jobTitle: 'Software Engineer',
      company: 'Kolatif',
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
