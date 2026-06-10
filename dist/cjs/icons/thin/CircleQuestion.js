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
var CircleQuestion_exports = {};
__export(CircleQuestion_exports, {
  default: () => CircleQuestion_default
});
module.exports = __toCommonJS(CircleQuestion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleQuestionThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 352C231.164 352 224 359.164 224 368S231.164 384 240 384S256 376.836 256 368S248.836 352 240 352ZM288.594 128H223.406C188.438 128 160 156.438 160 191.406V202C160 206.422 163.594 210 168 210S176 206.422 176 202V191.406C176 165.266 197.281 144 223.406 144H288.594C314.719 144 336 165.266 336 191.406C336 208.609 326.656 224.484 311.938 232.672L245.844 265.719C236.312 270.984 230.406 281.031 230.406 291.938V312C230.406 316.422 234 320 238.406 320C242.812 320 246.406 316.422 246.406 312V291.938C246.406 286.859 249.156 282.172 253.281 279.875L319.375 246.828C339.5 235.656 352 214.422 352 191.406C352 156.438 323.562 128 288.594 128ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" })
  }
));
CircleQuestionThin.displayName = "CircleQuestionThin";
var CircleQuestion_default = CircleQuestionThin;
