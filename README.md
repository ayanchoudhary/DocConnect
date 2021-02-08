# DocConnect

> To a future with better healthcare at your fingertips.

## Inspiration

The inspiration for the project comes from the present consdition of the society where hospitals and medical centers are not as accessible as they were in the past. So we wanted to make a solution that would enable users to contact a practitioner and get a treatment without having to physically visit a practitioner.

## What it does

DocConnect provides a platform for people to get medical diagnosis over an online platform. It connects the patient with the practitioner based on the symptoms and the practitoner's details and allows the practitioner to create and assign medical activities and treatments to the patient if they choose to accept the case. The patient can upload past prescriptions or renew a previous appointment. It also provides a chat interface for a better communication medium if the involved parties feel the need for one.

## How we built it

The tech-stack of DocConnect comprises of Mongo, Express, React, NodeJS and Electron. We have a REST API based architecture over an electron application which serves as both the client and the practitioner portals. We used [Ant Design](https://ant.design/) as the design library, [AWS Amplify](https://aws.amazon.com/amplify/) as the auth provider, [Adobe Embed Viewer](https://github.com/adobe/pdf-embed-api-samples) to view uploaded documents and [Slate.js](https://github.com/ianstormtaylor/slate) for the rich-text based chat feature. We use React as the frontend framework and a backend made using Express and NodeJS with Mongo as the database.

## Challenges we ran into

Most the integrations such AWS Amplify, Adobe Embed Viewer and Slate.js were something we hadn't worked with earlier and it took quite a lot of effort to get these integrations working. Also native applications require their own setup which too was something new.

## Accomplishments that we're proud of

We are very pleased with the fact that we have a complete and fully functional product ready for immediate use. The UI is very pleasing and UX is seamless so as to avoid any discomfort to the user. All the goals which we had in mind were more or less met and the new technologies which we were working with combined smoothly into the flow.

## What we learned

We learned working with native applications, the new technologies of AWS Amplify, Adobe and Slate and more importantly working as a team with different time-zones and collaborating successfully over github to complete our project.

## What's next for DocConnect

The further are to soften the edges, fix out some of the bugs and work on the user experience a bit. We also plan to replace the text-based chat with a video chat. We also have a few more features planned such as live activity tracking with notifcations and a completion based feedback system.
