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
var PepperHot_exports = {};
__export(PepperHot_exports, {
  default: () => PepperHot_default
});
module.exports = __toCommonJS(PepperHot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PepperHotSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M465.039 134.229C486.504 95.844 484.906 47.059 459.389 10.254C451.848 -0.574 437.078 -3.277 426.186 4.316C415.418 11.895 412.75 26.865 420.289 37.725C434.697 58.48 435.422 85.41 424.387 107.498C407.064 100.117 388.02 96 368 96C331.773 96 299.068 109.834 273.76 131.918L352 165.453V256H442.562L476.088 334.23C498.168 308.924 512 276.223 512 240C512 198.004 493.719 160.551 465.039 134.229ZM320 288V186.553L267.051 163.859C216.203 241.297 188.535 400 56 400C25.125 400 0 425.125 0 456S25.125 512 56 512C236.25 512 376.953 423.729 445.258 343.527L421.461 288H320Z" })
  }
));
PepperHotSolid.displayName = "PepperHotSolid";
var PepperHot_default = PepperHotSolid;
