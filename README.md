#### How to install and run app:

1. Clone this **branch** or download this project as zip and unzip it to your projects location.

#### How to run back-end part:
2. Open project location with visual studio, build and start debuging mode. Browser should run .Net framework on https://localhost:44378/.

#### How to run front-end part:
3. Open your project with visual studio code or other code editor, which has terminal.
4. Navigate to your project  with terminal, or open terminal in project location.
5. Run `npm install`, this will install all package.json dependencies.
6. Run command `ng build`, this command will build up your front-end to "/dist" folder.
7. Run command `ng serve`, this command will run app in browser, you will see message in terminal what port it is using.
8. Open your browser on that port location. Example: "http://localhost:4200/".

#### Notes!: 
1. This app uses json file as database. All values are not real, just for a display purpose. If you won't see any weather forecast, check /Database/WeatherForecast.jsom file, and change date of forecast. Currently all these forecast dates are set from 2020/08/13 - 2020/08/25 range.
2. There is console.log error which is caused by ngx-skycons. 
https://github.com/DancingDad/ngx-skycons/commit/df64f576ff486c6873eabf5e7ae06f669b75ee75 here is the solution to fix this error by changing node_modules component called "ngx-skycons.component.ts".

