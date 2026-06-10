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
var Campground_exports = {};
__export(Campground_exports, {
  default: () => Campground_default
});
module.exports = __toCommonJS(Campground_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CampgroundDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M574.061 448.012C575.279 451.435 576 455.025 576 458.704V480.004C576 497.674 561.674 512 544 512H32C14.326 512 0 497.674 0 480.004V458.704C0 455.025 0.721 451.435 1.939 448.012H574.061Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 448.012H574.121C573.043 444.981 571.592 442.071 569.631 439.466L327.561 117.799L381.061 44.309C386.186 37.059 384.561 27.061 377.436 21.936L351.561 3.064C344.438 -2.133 334.449 -0.559 329.268 6.573L288.061 63.306L246.854 6.573C241.672 -0.559 231.684 -2.133 224.561 3.064L198.686 21.936C191.561 27.061 189.936 37.059 195.061 44.309L248.561 117.799L6.49 439.466C4.529 442.071 3.078 444.981 2 448.012ZM288.061 288.028L404.436 448.008H171.686L288.061 288.028Z" })
    ]
  }
));
CampgroundDuotone.displayName = "CampgroundDuotone";
var Campground_default = CampgroundDuotone;
