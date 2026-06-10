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
var DisplayCode_exports = {};
__export(DisplayCode_exports, {
  default: () => DisplayCode_default
});
module.exports = __toCommonJS(DisplayCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplayCodeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H528C554.5 416 576 394.5 576 368V48C576 21.5 554.5 0 528 0ZM512 352H64V64H512V352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 64V352H512V64H64ZM242.141 241.852C249.953 249.664 249.953 262.352 242.141 270.164C238.234 274.07 233.125 276.008 228 276.008S217.766 274.07 213.859 270.164L165.859 222.164C158.047 214.352 158.047 201.664 165.859 193.852L213.859 145.852C221.672 138.039 234.328 138.039 242.141 145.852S249.953 166.352 242.141 174.164L208.281 208.008L242.141 241.852ZM410.141 222.164L362.141 270.164C358.234 274.07 353.125 276.008 348 276.008S337.766 274.07 333.859 270.164C326.047 262.352 326.047 249.664 333.859 241.852L367.719 208.008L333.859 174.164C326.047 166.352 326.047 153.664 333.859 145.852S354.328 138.039 362.141 145.852L410.141 193.852C417.953 201.664 417.953 214.352 410.141 222.164ZM424 464H352L336 416H240L224 464H152C138.75 464 128 474.75 128 488S138.75 512 152 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464Z" })
    ]
  }
));
DisplayCodeDuotone.displayName = "DisplayCodeDuotone";
var DisplayCode_default = DisplayCodeDuotone;
