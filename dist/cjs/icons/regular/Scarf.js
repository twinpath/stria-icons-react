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
var Scarf_exports = {};
__export(Scarf_exports, {
  default: () => Scarf_default
});
module.exports = __toCommonJS(Scarf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScarfRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.082 403.328C511.89 400.689 511.789 397.861 509.75 395.738L366.625 252.863L390.75 228.238C439.25 174.488 403.75 114.863 402.25 112.363L358.625 39.238C354.25 32.113 348.75 25.988 341.75 21.238C296 -9.262 209.375 -4.887 170.25 21.488C163.375 26.238 157.75 32.238 153.5 39.488L109.875 112.613C108.375 115.113 72.75 174.738 121.375 228.363L145.316 252.924L4.654 396.812C-1.569 403.018 -1.549 413.148 4.699 419.328L4.762 419.391C10.996 425.555 21.039 425.533 27.246 419.34L94.498 350.486L116.726 372.715L52.551 436.701C46.316 442.922 46.31 453.107 52.539 459.336C58.756 465.553 68.933 465.555 75.154 459.342L139.303 395.291L160.594 416.582L92.654 484.812C86.431 491.018 86.451 501.148 92.699 507.328L92.762 507.391C98.996 513.555 109.039 513.533 115.246 507.34L256 365.863L396.5 509.613C398.56 511.674 401.336 511.865 403.953 511.209C409.242 512.615 415.068 511.514 419.238 507.391L419.301 507.328C425.549 501.148 425.568 491.018 419.345 484.812L351.219 416.395L372.51 395.104L436.845 459.342C443.066 465.555 453.244 465.553 459.461 459.336C465.689 453.107 465.683 442.922 459.449 436.701L395.148 372.588L395.5 372.238L417.379 350.359L484.754 419.34C490.961 425.533 501.004 425.555 507.238 419.391L507.301 419.328C511.662 415.014 512.795 408.812 511.082 403.328ZM349 116.988L361 137.113C365.25 144.488 377.625 170.488 355.625 195.363L332.5 218.988L289.75 176.238L349 116.988ZM194.75 64.113C207.25 43.113 304.875 43.113 317.375 63.988L323.75 74.488L256 142.238L188.375 74.488L194.75 64.113ZM179.125 287.238L222.5 331.613L221.75 332.363L183.5 371.488L139.125 327.238L179.125 287.238ZM156.375 195.363C134.375 170.488 146.75 144.488 151.125 136.988L163.125 116.863L372.875 326.988L328.5 371.363L156.375 195.363Z" })
  }
));
ScarfRegular.displayName = "ScarfRegular";
var Scarf_default = ScarfRegular;
