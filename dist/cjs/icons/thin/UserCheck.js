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
var UserCheck_exports = {};
__export(UserCheck_exports, {
  default: () => UserCheck_default
});
module.exports = __toCommonJS(UserCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 16C285.758 16 336 66.242 336 128S285.758 240 224 240S112 189.758 112 128S162.242 16 224 16ZM272.844 304H175.156C78.562 304 0 379.375 0 472C0 494.062 18.594 512 41.438 512H406.562C429.406 512 448 494.062 448 472C448 379.375 369.438 304 272.844 304ZM406.562 496H41.438C27.406 496 16 485.219 16 472C16 388.188 87.406 320 175.156 320H272.844C360.594 320 432 388.188 432 472C432 485.219 420.594 496 406.562 496ZM637.656 146.344C634.531 143.219 629.469 143.219 626.344 146.344L504 268.688L445.656 210.344C442.531 207.219 437.469 207.219 434.344 210.344S431.219 218.531 434.344 221.656L498.344 285.656C499.906 287.219 501.938 288 504 288S508.094 287.219 509.656 285.656L637.656 157.656C640.781 154.531 640.781 149.469 637.656 146.344Z" })
  }
));
UserCheckThin.displayName = "UserCheckThin";
var UserCheck_default = UserCheckThin;
