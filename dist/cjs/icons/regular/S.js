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
var S_exports = {};
__export(S_exports, {
  default: () => S_default
});
module.exports = __toCommonJS(S_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M177.582 480.156C115.707 480.156 51.754 457.719 20.019 444.781C3.66 438.125 -4.199 419.437 2.488 403.062C9.144 386.687 27.754 378.781 44.207 385.531C121.722 417.125 194.785 424.937 230.254 405.219C244.082 397.562 251.926 385.812 254.941 368.25C262.191 325.938 236.738 311.5 151.254 286.875C80.707 266.562 -15.903 238.719 2.222 133.188C7.707 101.188 25.879 73.812 53.363 56.156C98.957 26.938 168.41 24.312 259.722 48.469C276.816 53 286.988 70.5 282.472 87.594C277.941 104.656 260.535 114.844 243.347 110.344C152.129 86.187 108.457 96.844 87.957 110C75.41 118.062 67.785 129.5 65.285 144C58.035 186.312 83.488 200.75 168.972 225.375C239.519 245.688 336.129 273.531 318.004 379.063C311.722 415.688 292.113 444.094 261.316 461.188C236.41 475.031 207.222 480.156 177.582 480.156Z" })
  }
));
SRegular.displayName = "SRegular";
var S_default = SRegular;
