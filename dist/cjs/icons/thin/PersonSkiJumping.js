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
var PersonSkiJumping_exports = {};
__export(PersonSkiJumping_exports, {
  default: () => PersonSkiJumping_default
});
module.exports = __toCommonJS(PersonSkiJumping_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSkiJumpingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 176C499.594 176 496 179.594 496 184V209C496 230.062 484.375 249.125 465.687 258.781L4.336 496.906C0.398 498.906 -1.135 503.75 0.898 507.656C2.305 510.438 5.086 512 7.992 512C9.242 512 10.492 511.719 11.648 511.094L473 273C497.062 260.594 512 236.062 512 209V184C512 179.594 508.406 176 504 176ZM127.955 160H225.457L166.986 236.928C164.58 240.094 162.475 243.477 160.697 247.033L107.367 353.688C99.461 369.5 105.867 388.719 121.682 396.625C126.275 398.906 131.15 400 135.963 400C147.713 400 158.994 393.531 164.619 382.312L213.435 284.678C216.777 277.996 221.242 272.076 226.779 267.062C254.183 242.248 340.211 164.25 340.211 164.25C351.713 152.75 355.213 135.75 348.963 120.75S328.211 96 311.961 96H127.955C110.203 96 95.951 110.25 95.951 128S110.203 160 127.955 160ZM127.955 112H311.961C321.693 112 330.42 117.85 334.191 126.904C337.896 135.797 335.818 146.014 329.465 152.396L216.039 255.203C209.06 261.521 203.371 269.031 199.125 277.523L150.316 375.141C147.576 380.605 142.078 384 135.963 384C133.488 384 131.076 383.426 128.838 382.314C120.945 378.367 117.734 368.734 121.68 360.842L175.008 254.189C176.34 251.525 177.926 248.977 179.725 246.609L238.197 169.682L257.717 144H127.955C118.982 144 111.951 136.971 111.951 128C111.951 119.027 118.982 112 127.955 112ZM396 104C424.709 104 448 80.707 448 52C448 23.291 424.709 0 396 0S344 23.291 344 52C344 80.707 367.291 104 396 104ZM396 16C415.85 16 432 32.148 432 52C432 71.85 415.85 88 396 88S360 71.85 360 52C360 32.148 376.15 16 396 16Z" })
  }
));
PersonSkiJumpingThin.displayName = "PersonSkiJumpingThin";
var PersonSkiJumping_default = PersonSkiJumpingThin;
