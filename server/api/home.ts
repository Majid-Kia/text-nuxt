export default defineEventHandler(() => {
  return {
    heroSection: {
      title: 'The Best Cloud VPS Since 2008!',
      description:
        'Instantly create High-Performance Cloud VPS services worldwide with NVMe SSD storage and 10Gbps connections at a fraction of cost.',
      action: { content: 'starting from $4.95', link: '/' },
      image: 'hero-home.webp',
    },
    pricingSection: {
      linux: [
        {
          id: 1,
          title: 'STARTER',
          link: '',
          isPopular: false,
          planSpec: [
            {
              id: 1,
              key: 'CPU',
              amount: '1',
              unit: 'vCPU',
              name: 'High-end 3.2+ GHz',
            },
            {
              id: 2,
              key: 'Memory',
              amount: '1',
              unit: 'GB',
              name: 'DDR4 Memory',
            },
            {
              id: 3,
              key: 'Storage',
              amount: '25',
              unit: 'GB',
              name: 'NVMe/SSD Storage',
            },
            {
              id: 4,
              key: 'Bandwidth',
              amount: '1',
              unit: 'TB',
              name: 'Bandwidth',
            },
            {
              id: 5,
              key: 'Connection',
              prefix: 'Up to',
              amount: '10',
              unit: 'Gbps',
              name: 'Connections',
            },
          ],
          pricing: {
            perMonth: {
              unit: '$',
              price: '4.95',
              period: 'm',
            },
            perHour: {
              unit: '$',
              price: '0.0068',
              period: 'h',
            },
          },
        },
        {
          id: 2,
          title: 'BASIC',
          link: '',
          isPopular: false,
          planSpec: [
            {
              id: 1,
              key: 'CPU',
              amount: '2',
              unit: 'vCPU',
              name: 'High-end 3.2+ GHz',
            },
            {
              id: 2,
              key: 'Memory',
              amount: '2',
              unit: 'GB',
              name: 'DDR4 Memory',
            },
            {
              id: 3,
              key: 'Storage',
              amount: '30',
              unit: 'GB',
              name: 'NVMe/SSD Storage',
            },
            {
              id: 4,
              key: 'Bandwidth',
              amount: '3',
              unit: 'TB',
              name: 'Bandwidth',
            },
            {
              id: 5,
              key: 'Connection',
              prefix: 'Up to',
              amount: '10',
              unit: 'Gbps',
              name: 'Connections',
            },
          ],
          pricing: {
            perMonth: {
              unit: '$',
              price: '9.95',
              period: 'm',
            },
            perHour: {
              unit: '$',
              price: '0.0138',
              period: 'h',
            },
          },
        },
        {
          id: 3,
          title: 'ADVANCED',
          link: '',
          isPopular: false,
          planSpec: [
            {
              id: 1,
              key: 'CPU',
              amount: '2',
              unit: 'vCPU',
              name: 'High-end 3.2+ GHz',
            },
            {
              id: 2,
              key: 'Memory',
              amount: '4',
              unit: 'GB',
              name: 'DDR4 Memory',
            },
            {
              id: 3,
              key: 'Storage',
              amount: '60',
              unit: 'GB',
              name: 'NVMe/SSD Storage',
            },
            {
              id: 4,
              key: 'Bandwidth',
              amount: '5',
              unit: 'TB',
              name: 'Bandwidth',
            },
            {
              id: 5,
              key: 'Connection',
              prefix: 'Up to',
              amount: '10',
              unit: 'Gbps',
              name: 'Connections',
            },
          ],
          pricing: {
            perMonth: {
              unit: '$',
              price: '19.95',
              period: 'm',
            },
            perHour: {
              unit: '$',
              price: '0.0277',
              period: 'h',
            },
          },
        },
        {
          id: 4,
          title: 'PROFESSIONAL',
          link: '',
          isPopular: true,
          planSpec: [
            {
              id: 1,
              key: 'CPU',
              amount: '4',
              unit: 'vCPU',
              name: 'High-end 3.2+ GHz',
            },
            {
              id: 2,
              key: 'Memory',
              amount: '8',
              unit: 'GB',
              name: 'DDR4 Memory',
            },
            {
              id: 3,
              key: 'Storage',
              amount: '140',
              unit: 'GB',
              name: 'NVMe/SSD Storage',
            },
            {
              id: 4,
              key: 'Bandwidth',
              amount: '7',
              unit: 'TB',
              name: 'Bandwidth',
            },
            {
              id: 5,
              key: 'Connection',
              prefix: 'Up to',
              amount: '10',
              unit: 'Gbps',
              name: 'Connections',
            },
          ],
          pricing: {
            perMonth: {
              unit: '$',
              price: '36.95',
              period: 'm',
            },
            perHour: {
              unit: '$',
              price: '0.0513',
              period: 'h',
            },
          },
        },
      ],
      windows: [
        {
          id: 1,
          title: 'BASIC',
          link: '',
          isPopular: false,
          planSpec: [
            {
              id: 1,
              key: 'CPU',
              amount: '2',
              unit: 'vCPU',
              name: 'High-end 3.2+ GHz',
            },
            {
              id: 2,
              key: 'Memory',
              amount: '2',
              unit: 'GB',
              name: 'DDR4 Memory',
            },
            {
              id: 3,
              key: 'Storage',
              amount: '30',
              unit: 'GB',
              name: 'NVMe/SSD Storage',
            },
            {
              id: 4,
              key: 'Bandwidth',
              amount: '3',
              unit: 'TB',
              name: 'Bandwidth',
            },
            {
              id: 5,
              key: 'Connection',
              prefix: 'Up to',
              amount: '10',
              unit: 'Gbps',
              name: 'Connections',
            },
          ],
          pricing: {
            perMonth: {
              unit: '$',
              price: '9.95',
              period: 'm',
            },
            perHour: {
              unit: '$',
              price: '0.0138',
              period: 'h',
            },
          },
        },
        {
          id: 2,
          title: 'ADVANCED',
          link: '',
          isPopular: false,
          planSpec: [
            {
              id: 1,
              key: 'CPU',
              amount: '2',
              unit: 'vCPU',
              name: 'High-end 3.2+ GHz',
            },
            {
              id: 2,
              key: 'Memory',
              amount: '4',
              unit: 'GB',
              name: 'DDR4 Memory',
            },
            {
              id: 3,
              key: 'Storage',
              amount: '60',
              unit: 'GB',
              name: 'NVMe/SSD Storage',
            },
            {
              id: 4,
              key: 'Bandwidth',
              amount: '5',
              unit: 'TB',
              name: 'Bandwidth',
            },
            {
              id: 5,
              key: 'Connection',
              prefix: 'Up to',
              amount: '10',
              unit: 'Gbps',
              name: 'Connections',
            },
          ],
          pricing: {
            perMonth: {
              unit: '$',
              price: '19.95',
              period: 'm',
            },
            perHour: {
              unit: '$',
              price: '0.0277',
              period: 'h',
            },
          },
        },
        {
          id: 3,
          title: 'PROFESSIONAL',
          link: '',
          isPopular: true,
          planSpec: [
            {
              id: 1,
              key: 'CPU',
              amount: '4',
              unit: 'vCPU',
              name: 'High-end 3.2+ GHz',
            },
            {
              id: 2,
              key: 'Memory',
              amount: '8',
              unit: 'GB',
              name: 'DDR4 Memory',
            },
            {
              id: 3,
              key: 'Storage',
              amount: '140',
              unit: 'GB',
              name: 'NVMe/SSD Storage',
            },
            {
              id: 4,
              key: 'Bandwidth',
              amount: '7',
              unit: 'TB',
              name: 'Bandwidth',
            },
            {
              id: 5,
              key: 'Connection',
              prefix: 'Up to',
              amount: '10',
              unit: 'Gbps',
              name: 'Connections',
            },
          ],
          pricing: {
            perMonth: {
              unit: '$',
              price: '36.95',
              period: 'm',
            },
            perHour: {
              unit: '$',
              price: '0.0513',
              period: 'h',
            },
          },
        },
        {
          id: 4,
          title: 'ENTERPRISE',
          link: '',
          isPopular: false,
          planSpec: [
            {
              id: 1,
              key: 'CPU',
              amount: '6',
              unit: 'vCPU',
              name: 'High-end 3.2+ GHz',
            },
            {
              id: 2,
              key: 'Memory',
              amount: '16',
              unit: 'GB',
              name: 'DDR4 Memory',
            },
            {
              id: 3,
              key: 'Storage',
              amount: '250',
              unit: 'GB',
              name: 'NVMe/SSD Storage',
            },
            {
              id: 4,
              key: 'Bandwidth',
              amount: '10',
              unit: 'TB',
              name: 'Bandwidth',
            },
            {
              id: 5,
              key: 'Connection',
              prefix: 'Up to',
              amount: '10',
              unit: 'Gbps',
              name: 'Connections',
            },
          ],
          pricing: {
            perMonth: {
              unit: '$',
              price: '69.95',
              period: 'm',
            },
            perHour: {
              unit: '$',
              price: '0.0971',
              period: 'h',
            },
          },
        },
      ],
    },
    ourKeyDiffrence: {
      title: 'Our Key Difference',
      action: ' join us now ',
      items: [
        {
          icon: 'our-key-difference/Processor.svg',
          title: 'AMD EPYC™ Processors',
          description: `Powerful AMD EPYC™ processors with high 3.2 GHz turbo speed to boost your performance beyond your imagination.`,
        },
        {
          icon: 'our-key-difference/Connection.svg',
          title: '10 Gbps Internet Connection',
          description:
            'All of our servers are connected to a 10 Gbps Internet connection. There will be no latency/lags with your server connection.',
        },
        {
          icon: 'our-key-difference/Storage.svg',
          title: 'Super Fast Storage',
          description:
            'Enterprise NVMe SSD storage with much higher speed, equipped on all of our servers.',
        },
        {
          icon: 'our-key-difference/Payment.svg',
          title: 'Flexible Payment',
          description:
            'Pay with any method you wish! Cloudzy welcomes Bitcoin and Ethereum  as well as PayPal, Mastercard, Visa, and more.',
        },
        {
          icon: 'our-key-difference/PayLess.svg',
          title: 'Pay Less',
          description:
            'Get the best Cloud VPS with the most affordable prices in the market with much better specifications!',
        },
        {
          icon: 'our-key-difference/Refund.svg',
          title: 'Full Refund',
          description:
            "We are so confident in our services that we offer a full refund within a specified period of usage if Cloudzy doesn't suit your needs.",
        },
      ],
    },
    testimonial: {
      title: 'What Our Users Have to Say',
      slides: [
        {
          id: 1,
          comment:
            'I am not a tech person, so I wanted the most user-friendly VPS on the market that a five-year-old could use; Cloudzy offered me exactly that. Also, the control panel has a simple user interface; I can access it from all my devices.',
          rating: '5',
          writerInfo: {
            name: 'Brandon Madden',
            image: 'Rectangle5026.png',
          },
        },
        {
          id: 2,
          comment:
            'I have tried many VPS services, but the same problem kept happening; their support staff was not up to the job. My highest expectation from a VPS provider was a support team that got back to me ASAP. Cloudzy fulfilled my wish like no other.',
          rating: '5',
          writerInfo: {
            name: 'Destiny Kaiser',
            image: 'Rectangle5027.png',
          },
        },
        {
          id: 3,
          comment:
            "I had invested all my budget in starting my small business, but I knew I had to invest in reliable VPS to protect my data against cyber threats. I almost didn't believe Cloudzy offered VPS servers worldwide in more than 15 locations at THESE PRICES. Talk about a Jackpot!",
          rating: '5',
          writerInfo: {
            name: 'Haven Hayes',
            image: 'Rectangle5029.png',
          },
        },
        {
          id: 4,
          comment:
            'I think VPS providers that offer money-back guarantees are the ones we can trust and definitely invest in. Cloudzy was so transparent about this from the start, and after I talked to their support team, I knew I had found the best VPS provider on the market.',
          rating: '5',
          writerInfo: {
            name: 'Jenna Hartman',
            image: 'Rectangle5030.png',
          },
        },
      ],
    },
    mostPopular: [
      {
        title: 'Windows',
        icon: 'most-popular-services/window.svg',
        serviceDescriptionContent: {
          title: 'Efficient Windows VPS Hosting Solutions',
          description: `Want free windows with that? Cloudzy’s cost-effective and powerful Windows VPS plans come with whatever Windows version you want, like Windows Server 2022 or Windows Server 2012 — for FREE.`,
          action: {
            content: 'See Windows VPS Plans',
            link: '/',
          },
        },
      },
      {
        title: 'Linux',
        icon: 'most-popular-services/linux.svg',
        serviceDescriptionContent: {
          title: 'Affordable, High-Performance Linux VPS Solutions',
          description:
            'Get your KVM-powered Linux Virtual Cloud Server with the Linux distro of your choice installed at no extra charge. Supercharge your services with state-of-the-art infrastructure, ultra-fast connection, and SSD storage at affordable prices﹣and we mean really affordable.',
          action: {
            content: 'See Linux VPS Plans',
            link: '/',
          },
        },
      },
      {
        title: 'RDP',
        icon: 'most-popular-services/rdp.svg',
        serviceDescriptionContent: {
          title: 'Easy and Reliable Remote Desktop Solutions',
          description:
            'Want to launch your own Windows-powered remote desktop at a location of your choice? Buy one of our RDP Server Plans and get full root access to secure, stable, and easy-to-use RDP servers. Connect to your Remote Desktop wherever you are using your favorite RDP software. Did we mention the free Windows?',
          action: {
            content: 'See RDP Server Plans',
            link: '/',
          },
        },
      },
      {
        title: 'Forex',
        icon: 'most-popular-services/forex.svg',
        serviceDescriptionContent: {
          title: 'Lightning-Fast, Minimal-Latency Forex VPS Solutions',
          description: `Hypersonic VPS hosting tailor-made for automated Forex trading. Minimize latency and get your Forex VPS as close to your broker as possible. Maximize your profits using our precision-engineered Forex Virtual Cloud Servers plans running on high-tech infrastructure at 15 strategic locations across the globe.`,
          action: {
            content: 'See Forex VPS Plans',
            link: '/',
          },
        },
      },
    ],
    latestBlog: {
      title: 'Latest Blog Posts',
      slides: [
        {
          id: 1,
          image: 'Best-RDP-provider-new.png',
          context: 'Best RDP provider【Top 10 RDP Server Providers of 2023】',
          info: {
            date: 'May 20, 2020 | 5 mins read',
            name: 'Marry H',
            avatar: 'marryH.png',
          },
        },
        {
          id: 2,
          image: 'Best-VPS-Hosting-Providers-new.png',
          context:
            'Best VPS Hosting Providers in 2023🥇+[How to Choose the Best VPS Provider]',
          info: {
            date: 'May 20, 2020 | 5 mins read',
            name: 'Armin Potter',
            avatar: 'armin.png',
          },
        },
        {
          id: 3,
          image: 'Best-VPS-Hosting-for-WordPress-new.png',
          context:
            'Best VPS Hosting for WordPress 2023 — Choosing the WordPress VPS Provider',
          info: {
            date: 'May 20, 2020 | 5 mins read',
            name: 'Lily Carnel',
            avatar: 'lily.png',
          },
        },
        {
          id: 4,
          image: 'Best-Mail-Servers-for-Windows-new.png',
          context: '8 Best Mail Servers for Windows 2023',
          info: {
            date: 'May 20, 2020 | 5 mins read',
            name: 'Emma Bennet',
            avatar: 'emma.png',
          },
        },
      ],
    },

    map: [
      {
        title: 'USA VPS',
        items: [
          {
            id: 'Chicago',
            icon: 'map/usa.jpg',
            link: '/',
            name: 'Chicago',
          },
          {
            id: 'Seattle',
            icon: 'map/usa.jpg',
            name: 'Seattle',
            link: '/',
          },
          {
            id: 'San_Francisco',
            icon: 'map/usa.jpg',
            name: 'San Francisco',
            link: '/',
          },
          {
            id: 'Los_Angeles',
            name: 'Los Angeles',
            icon: 'map/usa.jpg',
            link: '/',
          },
          {
            id: 'las_vegas',
            icon: 'map/usa.jpg',
            link: '/',
            name: 'Las Vegas',
          },
          {
            id: 'Phoenix',
            icon: 'map/usa.jpg',
            name: 'Phoenix',
            link: '/',
          },
          {
            id: 'Dallas',
            name: 'Dallas',
            icon: 'map/usa.jpg',
            link: '/',
          },
          {
            id: 'Miami',
            icon: 'map/usa.jpg',
            link: '/',
            name: 'Miami',
          },
          {
            id: 'New_York',
            icon: 'map/usa.jpg',
            link: '/',
            name: 'New York',
          },
          {
            id: 'Washington_D.C',
            icon: 'map/usa.jpg',
            link: '/',
            name: 'Washington',
          },
        ],
      },
      {
        title: 'Europe VPS',
        items: [
          {
            id: 'luxembourg',
            icon: 'map/luxembourg.jpg',
            link: '/',
            name: 'Luxembourg',
          },
          {
            id: 'london',
            icon: 'map/uk.jpg',
            link: '/',
            name: 'London',
          },
          {
            id: 'Amsterdam',
            icon: 'map/netherlands.jpg',
            link: '/',
            name: 'Amsterdam',
          },
          {
            id: 'FrankFurt',
            icon: 'map/netherlands.jpg',
            link: '/',
            name: 'Frankfurt',
          },
        ],
      },
      {
        title: 'Asia VPS',
        items: [
          {
            name: 'Singapore',
            id: 'Singapore',
            icon: 'map/singapore.jpg',
            link: '/',
          },
        ],
      },
    ],
  }
})
