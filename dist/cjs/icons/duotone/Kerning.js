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
var Kerning_exports = {};
__export(Kerning_exports, {
  default: () => Kerning_default
});
module.exports = __toCommonJS(Kerning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KerningDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M302.325 99.375C286.465 91.5 267.278 97.875 259.387 113.688L160.012 312.438L60.637 113.688C52.746 97.875 33.575 91.5 17.7 99.375C1.887 107.281 -4.519 126.5 3.387 142.312L131.387 398.312C136.809 409.156 147.887 416 160.012 416S183.215 409.156 188.637 398.312L316.637 142.312C324.543 126.5 318.137 107.281 302.325 99.375ZM636.637 369.688L508.637 113.688C497.793 92 462.231 92 451.387 113.688L323.387 369.688C315.481 385.5 321.887 404.719 337.7 412.625C353.559 420.5 372.715 414.125 380.637 398.313L403.793 352H556.231L579.387 398.312C584.996 409.531 596.293 416 608.043 416C612.84 416 617.731 414.906 622.325 412.625C638.137 404.719 644.543 385.5 636.637 369.688ZM435.793 288L480.012 199.562L524.231 288H435.793Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M199.99 512C197.584 512 195.147 511.469 192.85 510.312C184.944 506.344 181.74 496.75 185.694 488.844L425.694 8.844C429.662 0.969 439.24 -2.312 447.162 1.688C455.069 5.656 458.272 15.25 454.319 23.156L214.319 503.156C211.506 508.75 205.865 512 199.99 512Z" })
    ]
  }
));
KerningDuotone.displayName = "KerningDuotone";
var Kerning_default = KerningDuotone;
