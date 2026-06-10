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
var Strikethrough_exports = {};
__export(Strikethrough_exports, {
  default: () => Strikethrough_default
});
module.exports = __toCommonJS(Strikethrough_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StrikethroughDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M331.474 240C309.769 230.455 287.069 223.467 267.312 217.65C186.767 193.9 171.589 182.525 177.022 149.994C178.96 138.525 184.862 129.557 194.575 123.338C208.94 114.119 245.731 102.086 331.241 125.275C352.478 130.963 374.464 118.432 380.272 97.086C386.019 75.773 373.433 53.805 352.103 48.023C264.251 24.273 196.729 26.93 151.413 55.961C122.745 74.367 103.851 103.055 98.196 136.744C90.151 184.682 105.019 216.986 129.558 240H331.474ZM412.052 319.902H313.833C333.815 331.184 338.173 342.965 334.987 362.029C331.895 380.342 323.276 387.248 316.093 391.186C285.862 407.936 219.653 399.936 151.476 371.529C131.052 362.904 107.69 372.654 99.196 393.029C90.702 413.436 100.321 436.842 120.683 445.342C151.071 458.031 212.407 480 272.464 480C301.384 480 330.022 474.906 354.726 461.219C386.925 443.436 407.382 413.717 413.815 375.279C417.401 353.898 416.356 335.674 412.052 319.902Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 264C512 277.25 501.25 288 488 288H24C10.75 288 0 277.25 0 264S10.75 240 24 240H488C501.25 240 512 250.75 512 264Z" })
    ]
  }
));
StrikethroughDuotone.displayName = "StrikethroughDuotone";
var Strikethrough_default = StrikethroughDuotone;
