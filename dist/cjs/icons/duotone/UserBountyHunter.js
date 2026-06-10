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
var UserBountyHunter_exports = {};
__export(UserBountyHunter_exports, {
  default: () => UserBountyHunter_default
});
module.exports = __toCommonJS(UserBountyHunter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserBountyHunterDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M330.498 169.947C305.357 183.867 266.264 213.766 257.807 266.967L335.219 249.928L330.498 169.947ZM96 0H80C71.164 0 64 7.164 64 16V264C64 264 64.289 263.721 64.398 263.615C64.367 262.654 64 261.777 64.057 260.803L70.963 143.801C72.432 116.186 81.713 90.904 96 69.219V32C104.836 32 112 24.836 112 16S104.836 0 96 0ZM117.502 169.947L112.781 249.928L190.193 266.967C181.736 213.764 142.643 183.867 117.502 169.947ZM160 464V512H288V464L224 416L160 464Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 352H128C57.307 352 0 409.307 0 480C0 497.672 14.326 512 32 512H160V464L224 416L288 464V512H416C433.674 512 448 497.672 448 480C448 409.307 390.693 352 320 352ZM89.301 293.91L207.846 320H240.154L358.699 293.91C374.176 290.502 384.869 276.479 383.943 260.803L377.037 143.801C372.752 63.188 305.506 0 224 0S75.248 63.188 70.963 143.801L64.057 260.803C63.131 276.479 73.824 290.502 89.301 293.91ZM329.686 156.184L335.219 249.928L248 269.125V171.5L329.686 156.184ZM224 48C270.572 48 309.949 78.062 323.719 120H124.23C137.939 78.137 177.365 48 224 48ZM118.314 156.184L200 171.5V269.125L112.781 249.928L118.314 156.184Z" })
    ]
  }
));
UserBountyHunterDuotone.displayName = "UserBountyHunterDuotone";
var UserBountyHunter_default = UserBountyHunterDuotone;
