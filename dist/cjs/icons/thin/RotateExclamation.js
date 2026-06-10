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
var RotateExclamation_exports = {};
__export(RotateExclamation_exports, {
  default: () => RotateExclamation_default
});
module.exports = __toCommonJS(RotateExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RotateExclamationThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M264 296V120C264 115.578 260.406 112 256 112S248 115.578 248 120V296C248 300.422 251.594 304 256 304S264 300.422 264 296ZM240 368C240 376.836 247.164 384 256 384S272 376.836 272 368S264.836 352 256 352S240 359.164 240 368ZM463.531 272.062C463.219 272.031 462.906 272 462.625 272C458.594 272 455.156 275 454.687 279.094C443.094 379.938 357.656 456 256 456C170.197 456 94.365 400.441 67.109 320H144C148.406 320 152 316.406 152 312S148.406 304 144 304H48C43.594 304 40 307.594 40 312V408C40 412.406 43.594 416 48 416S56 412.406 56 408V335.969C88.428 416.914 167.248 472 256 472C365.812 472 458.062 389.844 470.562 280.906C471.062 276.531 467.938 272.562 463.531 272.062ZM464 96C459.594 96 456 99.594 456 104V176.031C423.572 95.086 344.752 40 256 40C146.188 40 53.938 122.156 41.438 231.094C40.938 235.469 44.062 239.438 48.469 239.938C48.781 239.969 49.094 240 49.375 240C53.406 240 56.844 237 57.313 232.906C68.906 132.062 154.344 56 256 56C341.803 56 417.635 111.559 444.891 192H368C363.594 192 360 195.594 360 200S363.594 208 368 208H464C468.406 208 472 204.406 472 200V104C472 99.594 468.406 96 464 96Z" })
  }
));
RotateExclamationThin.displayName = "RotateExclamationThin";
var RotateExclamation_default = RotateExclamationThin;
