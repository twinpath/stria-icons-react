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
var Left_exports = {};
__export(Left_exports, {
  default: () => Left_default
});
module.exports = __toCommonJS(Left_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 192H224V96C224 83.062 216.203 71.391 204.25 66.438C200.287 64.797 196.127 64 192.004 64C183.678 64 175.498 67.25 169.375 73.375L9.375 233.375C3.125 239.625 0 247.812 0 256S3.125 272.375 9.375 278.625L169.375 438.625C175.498 444.748 183.678 448 192.004 448C196.127 448 200.285 447.203 204.25 445.562C216.203 440.609 224 428.938 224 416V320H416C433.674 320 448 305.674 448 288V224C448 206.328 433.674 192 416 192ZM432 288C432 296.822 424.822 304 416 304H208V416C208 422.492 204.123 428.295 198.133 430.777C196.174 431.588 194.111 432 192.004 432C187.73 432 183.713 430.334 180.689 427.311L20.689 267.311C17.666 264.287 16 260.27 16 256C16 251.729 17.666 247.711 20.689 244.688L180.689 84.688C183.713 81.664 187.73 80 192.004 80C194.111 80 196.174 80.41 198.125 81.219C204.123 83.705 208 89.506 208 96V208H416C424.822 208 432 215.178 432 224V288Z" })
  }
));
LeftThin.displayName = "LeftThin";
var Left_default = LeftThin;
