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
var ClockDesk_exports = {};
__export(ClockDesk_exports, {
  default: () => ClockDesk_default
});
module.exports = __toCommonJS(ClockDesk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClockDeskRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M248 228V120C248 106.75 237.25 96 224 96S200 106.75 200 120V240C200 247.562 203.562 254.656 209.594 259.188L273.594 307.188C277.906 310.438 282.969 312 287.969 312C295.281 312 302.5 308.688 307.187 302.406C315.156 291.781 313 276.75 302.406 268.812L248 228ZM224 0C100.289 0 0 100.289 0 224C0 228.465 0 460.156 0 460.156C0 488.789 23.213 512 51.846 512H396.154C424.787 512 448 488.789 448 460.156C448 460.156 448 228.465 448 224C448 100.289 347.713 0 224 0ZM224 400C126.953 400 48 321.047 48 224S126.953 48 224 48S400 126.953 400 224S321.047 400 224 400Z" })
  }
));
ClockDeskRegular.displayName = "ClockDeskRegular";
var ClockDesk_default = ClockDeskRegular;
