// import { Component } from '@angular/core';
// import { NgForm, FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './home.html',
//   styleUrls: ['./home.css']
// })
// export class HomeComponent {
//   // FAQ Accordion State
//   activeFaqIndex: number | null = null;

//   // Sample course data - in a real app, this would come from a service
//   courses = [
//     {
//       id: 1,
//       title: 'Complete Web Developer Bootcamp',
//       category: 'Web Development',
//       description: 'Master HTML, CSS, JavaScript and modern frameworks',
//       duration: '24h 30m',
//       rating: 4.8,
//       image: 'assets/course1.jpg',
//       badge: 'Bestseller'
//     },
//     {
//       id: 2,
//       title: 'Data Science Fundamentals',
//       category: 'Data Science',
//       description: 'Learn Python, Pandas, and data visualization',
//       duration: '18h 15m',
//       rating: 4.6,
//       image: 'assets/course2.jpg',
//       badge: 'Popular'
//     },
//     {
//       id: 3,
//       title: 'Mobile App Development with Flutter',
//       category: 'Mobile Development',
//       description: 'Build cross-platform apps with Flutter framework',
//       duration: '15h 45m',
//       rating: 4.7,
//       image: 'assets/course3.jpg'
//     }
//   ];

//   // Sample FAQ data
//   faqs = [
//     {
//       question: 'How do I access my courses after enrollment?',
//       answer: 'Once you enroll in a course, you\'ll gain immediate access through your dashboard. All courses are available 24/7 and can be accessed from any device.'
//     },
//     {
//       question: 'Can I download course materials for offline use?',
//       answer: 'Yes, most courses offer downloadable resources like PDFs, code exercises, and slides that you can access offline.'
//     },
//     {
//       question: 'What if I don\'t like a course I purchased?',
//       answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with a course, you can request a full refund within 30 days of purchase.'
//     }
//   ];

//   // Toggle FAQ item
//   toggleFaq(index: number): void {
//     this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
//   }

//   // Search function
//   searchCourses(searchTerm: string): void {
//     // In a real app, this would call a service to filter courses
//     console.log('Searching for:', searchTerm);
//   }

//   // Enroll in course
//   enrollCourse(courseId: number): void {
//     // In a real app, this would navigate to checkout or add to cart
//     console.log('Enrolling in course:', courseId);
//   }

//   // Join community
//   joinCommunity(): void {
//     console.log('Joining community...');
//     // Would typically navigate to signup or community page
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  // Course data
  courses = [
    {
      id: 1,
      title: 'Advanced Machine Learning',
      code: 'ML-401',
      progress: 65,
      rating: 4,
      badge: 'In Progress'
    },
    {
      id: 2,
      title: 'Quantum Computing Fundamentals',
      code: 'QC-210',
      progress: 15,
      rating: 3,
      badge: 'New'
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      code: 'WEB-301',
      progress: 100,
      rating: 5,
      badge: 'Completed'
    },
    {
      id: 4,
      title: 'Blockchain Development',
      code: 'BC-401',
      progress: 0,
      rating: 4,
      badge: 'Recommended'
    },
    {
      id: 5,
      title: 'Data Science with Python',
      code: 'DS-301',
      progress: 42,
      rating: 4,
      badge: 'In Progress'
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials',
      code: 'CS-201',
      progress: 5,
      rating: 3,
      badge: 'New'
    }
  ];

  // Group data
  group = {
    name: 'AI Research Collective',
    members: 16,
    projects: 4,
    discussions: 28,
    progress: 75
  };

  // Certifications
  certifications = [
    {
      title: 'Full Stack Web Development',
      date: 'June 15, 2023'
    },
    {
      title: 'Python Programming',
      date: 'May 2, 2023'
    }
  ];

  // Get course progress style
  getProgressStyle(progress: number) {
    return { width: `${progress}%` };
  }

  // Get star rating
  getStars(rating: number) {
    return Array(5).fill(0).map((_, i) => i < rating);
  }

  // View AI feedback
  viewFeedback(courseId: number) {
    console.log(`Viewing feedback for course ${courseId}`);
    // In a real app, this would open a modal with detailed feedback
  }

  // Continue course
  continueCourse(courseId: number) {
    console.log(`Continuing course ${courseId}`);
    // In a real app, this would navigate to the course
  }

  // Join group discussion
  joinDiscussion() {
    console.log('Joining group discussion');
    // In a real app, this would navigate to the discussion
  }

  // View certificate
  viewCertificate(certIndex: number) {
    console.log(`Viewing certificate ${certIndex}`);
    // In a real app, this would open a modal with the certificate
  }

  // Share certificate
  shareCertificate(certIndex: number) {
    console.log(`Sharing certificate ${certIndex}`);
    // In a real app, this would open a share dialog
  }

  // Open AI assistant
  openAIAssistant() {
    console.log('Opening AI assistant');
    // In a real app, this would open a chat interface
  }
}