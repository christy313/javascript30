## Day02 JS and CSS Clock notes

### Summary
A clock runs with JavaScript current time.

### Practice

#### 1. clock hand transform

```css
transform-origin: 100% or right;
transform: rotate(90deg);
```

#### 2. clock hand goes a little bit back and forth

```css
transition: all 0.05s ease;
transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
```

#### 3. Make the second rotate as the `new Date().getSeconds()`

- a. Make a function to run every second
- b. Get second
- c. Turn second to degree and integrate into the clock

#### 4. Make the minute rotate as the `new Date().getMinutes()` so does the hour

### Reference

- [transform-origin](https://css-tricks.com/almanac/properties/t/transform-origin/)

- [transition](https://css-tricks.com/almanac/properties/t/transition/)

- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

- [JavaScript HTML DOM - Changing CSS](https://www.w3schools.com/js/js_htmldom_css.asp)

- [Javascript, Time and Date: Getting the current minute, hour, day, week, month, year of a given millisecond time](https://stackoverflow.com/questions/4402934/javascript-time-and-date-getting-the-current-minute-hour-day-week-month-y)

```javascript
new Date().getDate()          // Get the day as a number (1-31)
new Date().getDay()           // Get the weekday as a number (0-6)
new Date().getFullYear()      // Get the four digit year (yyyy)
new Date().getHours()         // Get the hour (0-23)
new Date().getMilliseconds()  // Get the milliseconds (0-999)
new Date().getMinutes()       // Get the minutes (0-59)
new Date().getMonth()         // Get the month (0-11)
new Date().getSeconds()       // Get the seconds (0-59)
new Date().getTime()          // Get the time (milliseconds since January 1, 1970)
```