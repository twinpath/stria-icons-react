var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var UserCowboy_exports = {};
__export(UserCowboy_exports, {
  default: () => UserCowboy_default
});
module.exports = __toCommonJS(UserCowboy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserCowboyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.03 472.238C434.065 420.379 387.475 384 334.028 384H114.024C60.574 384 13.985 420.379 1.022 472.238C-4.027 492.438 11.246 512 32.063 512H415.987C436.803 512 452.076 492.438 447.03 472.238ZM415.987 496H32.063C21.864 496 13.969 486.414 16.545 476.117C27.746 431.301 67.832 400 114.024 400H334.028C380.217 400 420.303 431.301 431.506 476.117C434.108 486.523 426.076 496 415.987 496ZM110.942 124.312C111.535 124.438 112.129 124.5 112.692 124.5C116.346 124.5 119.658 121.969 120.502 118.25C135.033 53.281 154.533 16 174.002 16C180.877 16 188.002 18.781 195.127 24.281C212.565 37.906 236.971 37.875 254.346 24.313C261.502 18.781 268.627 16 275.502 16C295.065 16 314.533 53.094 328.877 117.75C329.846 122.062 334.157 124.844 338.407 123.844C342.719 122.875 345.469 118.625 344.5 114.312C327.658 38.469 304.471 0 275.502 0C265.002 0 254.596 3.906 244.565 11.656C232.908 20.781 216.69 20.781 204.908 11.625C194.908 3.906 184.502 0 174.002 0C145.19 0 121.94 38.594 104.879 114.75C103.91 119.062 106.629 123.344 110.942 124.312ZM224.002 181.156C395.969 181.156 446.469 108.812 446.875 108.062C449.063 104.375 447.907 99.719 444.344 97.375C440.75 95.031 435.938 95.937 433.438 99.437C432.938 100.094 384.25 165.156 224.002 165.156C64.067 165.156 15.004 100.031 14.598 99.469C12.098 95.844 7.098 94.969 3.473 97.406C-0.183 99.906 -1.09 104.906 1.41 108.531C1.91 109.25 53.41 181.156 224.002 181.156ZM104.004 216.125C99.598 216.125 96.004 219.812 96.004 224.219C96.004 294.688 153.408 352 224.002 352S352 294.688 352 224C352 219.594 348.407 216.125 344 216.125S336 219.812 336 224.219C336 285.844 285.752 336 224.002 336S112.004 285.844 112.004 224.219V224C112.004 219.594 108.41 216.125 104.004 216.125Z" })
  }
));
UserCowboyThin.displayName = "UserCowboyThin";
var UserCowboy_default = UserCowboyThin;
