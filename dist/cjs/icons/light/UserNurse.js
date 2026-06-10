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
var UserNurse_exports = {};
__export(UserNurse_exports, {
  default: () => UserNurse_default
});
module.exports = __toCommonJS(UserNurse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserNurseLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.997 477.33C447.997 357.196 344.468 318.338 335.086 318.338C326.701 318.338 318.446 321.552 312.262 327.736L223.998 416L135.737 327.736C129.551 321.552 121.296 318.339 112.911 318.339C102.938 318.339 0 357.798 0 477.33C0 502.342 21.51 512 34.662 512H413.334C426.216 512 447.997 502.511 447.997 477.33ZM413.334 480H34.662C33.194 480 31.998 478.803 31.998 477.332C31.998 422.289 63.852 373.285 112.946 350.201L201.371 438.627C207.62 444.875 215.809 448 223.998 448S240.377 444.875 246.627 438.627L335.053 350.201C384.145 373.279 415.998 422.285 415.998 477.332C415.998 478.803 414.803 480 413.334 480ZM247.998 72H239.998V64C239.998 55.156 232.842 48 223.998 48S207.998 55.156 207.998 64V72H199.998C191.155 72 183.998 79.156 183.998 88S191.155 104 199.998 104H207.998V112C207.998 120.844 215.155 128 223.998 128S239.998 120.844 239.998 112V104H247.998C256.842 104 263.998 96.844 263.998 88S256.842 72 247.998 72ZM223.998 304C294.202 304 351.998 246.578 351.998 176V65.875C351.998 52.5 343.748 40.5 331.248 35.875L246.498 4.125C239.248 1.375 231.623 0 223.998 0S208.748 1.375 201.498 4.125L116.748 35.875C104.248 40.5 95.998 52.5 95.998 65.875V176C95.998 246.578 153.795 304 223.998 304ZM127.975 65.84L212.848 34.045C216.424 32.688 220.176 32 223.998 32S231.573 32.688 235.272 34.09L319.998 65.875V144H127.993L127.975 65.84ZM319.487 176C319.487 228.938 276.655 272 223.998 272S128.51 228.938 128.51 176H319.487Z " })
  }
));
UserNurseLight.displayName = "UserNurseLight";
var UserNurse_default = UserNurseLight;
