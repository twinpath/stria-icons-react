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
var Archway_exports = {};
__export(Archway_exports, {
  default: () => Archway_default
});
module.exports = __toCommonJS(Archway_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArchwayThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 96C568.875 96 576 88.875 576 80V16C576 7.125 568.875 0 560 0H16C7.125 0 0 7.125 0 16V80C0 88.875 7.125 96 16 96H24V496H8C3.578 496 0 499.578 0 504S3.578 512 8 512H192C196.422 512 200 508.422 200 504V328C200 279.469 239.469 240 288 240S376 279.469 376 328V504C376 508.422 379.578 512 384 512H568C572.422 512 576 508.422 576 504S572.422 496 568 496H552V96H560ZM16 80V16H560V80H16ZM536 496H392V328C392 270.656 345.344 224 288 224S184 270.656 184 328V496H40V96H536V496Z" })
  }
));
ArchwayThin.displayName = "ArchwayThin";
var Archway_default = ArchwayThin;
