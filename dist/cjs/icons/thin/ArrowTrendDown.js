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
var ArrowTrendDown_exports = {};
__export(ArrowTrendDown_exports, {
  default: () => ArrowTrendDown_default
});
module.exports = __toCommonJS(ArrowTrendDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTrendDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 224V408C576 412.422 572.406 416 568 416H384C379.594 416 376 412.422 376 408S379.594 400 384 400H548.688L320 171.312L197.656 293.656C196.094 295.219 194.047 296 192 296S187.906 295.219 186.344 293.656L2.344 109.656C0.781 108.094 0 106.047 0 104C0 99.43 3.737 96 8 96C10.047 96 12.094 96.781 13.656 98.344L192 276.688L314.344 154.344C315.906 152.781 317.953 152 320 152S324.094 152.781 325.656 154.344L560 388.688V224C560 219.578 563.594 216 568 216S576 219.578 576 224Z" })
  }
));
ArrowTrendDownThin.displayName = "ArrowTrendDownThin";
var ArrowTrendDown_default = ArrowTrendDownThin;
