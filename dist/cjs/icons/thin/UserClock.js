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
var UserClock_exports = {};
__export(UserClock_exports, {
  default: () => UserClock_default
});
module.exports = __toCommonJS(UserClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserClockThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 16C285.758 16 336 66.242 336 128S285.758 240 224 240S112 189.758 112 128S162.242 16 224 16ZM552 360H504V296C504 291.594 500.406 288 496 288S488 291.594 488 296V368C488 372.406 491.594 376 496 376H552C556.406 376 560 372.406 560 368S556.406 360 552 360ZM496 224C416.375 224 352 288.375 352 368S416.375 512 496 512S640 447.625 640 368S575.625 224 496 224ZM496 496C425.42 496 368 438.578 368 368C368 297.42 425.42 240 496 240S624 297.42 624 368C624 438.578 566.58 496 496 496ZM376 496H41.438C27.406 496 16 485.219 16 472C16 388.188 87.406 320 175.156 320H272.844C288.188 320 303.344 322.062 317.812 326.156C322.219 327.406 326.5 324.875 327.688 320.656C328.906 316.406 326.438 311.969 322.188 310.781C306.281 306.281 289.656 304 272.844 304H175.156C78.562 304 0 379.375 0 472C0 494.062 18.594 512 41.438 512H376C380.406 512 384 508.406 384 504S380.406 496 376 496Z" })
  }
));
UserClockThin.displayName = "UserClockThin";
var UserClock_default = UserClockThin;
