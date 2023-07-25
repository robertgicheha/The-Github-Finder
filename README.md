Github Finder App

App to search Github users and display their info and repositories.

### Bug Fixes, corrections and code FAQ

The repository code here on the main branch has been updated due to bugs and issues found since the app was released.

The updates here aim to be a reference and resource for common questions asked
in the Q&A and for those wishing to make corrections to the
project.

#### Q: How do I remove the user stats scroll bars that show on mobile devices

Code changes for this fix can be seen in [User.jsx](src/pages/User.jsx)

#### BUG: I can't see the alert text

Most likely you have the default light theme provided by DaisyUI. The theme is
set based on a `prefers-colorscheme` media query, so you may have a light theme
if you have a light browser theme or OS theme. In which case you won't see the
text in the alert show.
Code changes to fix this can be seen in [Alert.jsx](src/components/layout/Alert.jsx)
The changes here use a [ DaisyUI Alert component ](https://daisyui.com/components/alert/) so will adapt with a change in theme.
We also now conditionally set the element visibility to **'visible'** or
**'hidden'** rather than conditionally render, which prevents content shift when
the alert shows for a smoother UX.

#### Q: Why doesn't Craco work?

You don't need to use craco if you are using react-scripts version 5 or greater.

When Brad recorded the course react-scripts was at version 4 and didn't support postcss, now react-scripts is at version 5 and does support postcss.
So just check what version of react-scripts you have...

    npm list react-scripts

If it's at version 5 or greater then follow the [ Tailwind version 3 ](https://tailwindcss.com/docs/guides/create-react-app) docs to setup.

#### BUG: Linking to users websites

Some users from Github have already prefixed their websites with `http://` or
`https://` so we need to check in [User.jsx](src/pages/User.jsx) if their
website url starts with `http` before constructing the external link.
Code changes can be see in [User.jsx](src/pages/User.jsx#L48)

---

## Usage

Rename **_.env.example_** to **_.env_**

You can use the Github API without a personal token, but if you want to use your token, add it to the .env file

Learn how to create a token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

### Install Dependencies

```
npm install
```
### Run

```
npm start
```

Tailwind UI created by [Hassib Moddasser](https://twitter.com/hassibmoddasser)
