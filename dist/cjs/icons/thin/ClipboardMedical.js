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
var ClipboardMedical_exports = {};
__export(ClipboardMedical_exports, {
  default: () => ClipboardMedical_default
});
module.exports = __toCommonJS(ClipboardMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardMedicalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 96C200.836 96 208 88.836 208 80C208 71.162 200.836 64 192 64S176 71.162 176 80C176 88.836 183.164 96 192 96ZM355.188 100C351.094 98.281 346.438 100.062 344.656 104.156C342.906 108.188 344.75 112.906 348.812 114.688C360.469 119.75 368 131.281 368 144V464C368 481.656 353.656 496 336 496H48C30.344 496 16 481.656 16 464V144C16 131.312 23.531 119.812 35.219 114.688C39.25 112.938 41.094 108.219 39.312 104.156C37.562 100.125 32.938 98.219 28.781 100.062C11.312 107.719 0 124.969 0 144V464C0 490.469 21.531 512 48 512H336C362.469 512 384 490.469 384 464V144C384 124.906 372.688 107.625 355.188 100ZM96 160H288C305.674 160 320 145.672 320 128V113.613C320 86.213 297.787 64 270.387 64C262.973 27.484 230.703 0 192 0S121.027 27.484 113.613 64C86.213 64 64 86.213 64 113.613V128C64 145.672 78.328 160 96 160ZM80 113.613C80 95.049 95.049 80 113.613 80H126.691L128.537 70.906C133.523 46.344 150.809 24.732 175.021 18.256C211.953 8.375 247.578 32.084 254.707 67.184L257.309 80H270.387C288.951 80 304 95.049 304 113.613V128C304 136.836 296.838 144 288 144H96C87.164 144 80 136.836 80 128V113.613ZM165.818 448H218.182C227.018 448 234.182 440.836 234.182 432V378.182H288C296.836 378.182 304 371.018 304 362.182V309.818C304 300.98 296.836 293.818 288 293.818H234.182V240C234.182 231.162 227.018 224 218.182 224H165.818C156.982 224 149.818 231.162 149.818 240V293.818H96C87.164 293.818 80 300.98 80 309.818V362.182C80 371.018 87.164 378.182 96 378.182H149.818V432C149.818 440.836 156.982 448 165.818 448ZM96 362.182V309.818H165.818V240H218.182V309.818H288V362.182H218.182V432H165.818V362.182H96Z" })
  }
));
ClipboardMedicalThin.displayName = "ClipboardMedicalThin";
var ClipboardMedical_default = ClipboardMedicalThin;
