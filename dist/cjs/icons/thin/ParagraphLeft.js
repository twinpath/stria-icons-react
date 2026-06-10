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
var ParagraphLeft_exports = {};
__export(ParagraphLeft_exports, {
  default: () => ParagraphLeft_default
});
module.exports = __toCommonJS(ParagraphLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ParagraphLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 408H31.135L124.937 334.297C128.422 331.562 129.016 326.531 126.297 323.062C123.547 319.547 118.484 319.016 115.062 321.703L3.062 409.703C1.125 411.219 0 413.547 0 416S1.125 420.781 3.062 422.297L115.062 510.297C116.516 511.438 118.266 512 120 512C122.359 512 124.719 510.953 126.297 508.938C129.016 505.469 128.422 500.438 124.937 497.703L31.135 424H376C380.422 424 384 420.422 384 416S380.422 408 376 408ZM144 224H184V312C184 316.422 187.578 320 192 320S200 316.422 200 312V16H280V312C280 316.422 283.578 320 288 320S296 316.422 296 312V16H344C348.422 16 352 12.422 352 8S348.422 0 344 0H144C82.25 0 32 50.25 32 112S82.25 224 144 224ZM144 16H184V208H144C91.062 208 48 164.938 48 112S91.062 16 144 16Z" })
  }
));
ParagraphLeftThin.displayName = "ParagraphLeftThin";
var ParagraphLeft_default = ParagraphLeftThin;
