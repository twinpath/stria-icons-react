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
var Question_exports = {};
__export(Question_exports, {
  default: () => Question_default
});
module.exports = __toCommonJS(Question_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuestionThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 432C135.164 432 128 439.164 128 448S135.164 464 144 464S160 456.836 160 448S152.836 432 144 432ZM211.281 32H108.719C48.781 32 0 81.578 0 142.531V152C0 156.422 3.594 160 8 160S16 156.422 16 152V142.531C16 90.406 57.594 48 108.719 48H211.281C262.406 48 304 90.406 304 142.531C304 176.859 285.688 208.531 255.906 225.406L160.625 286.047C145.438 294.641 136 310.938 136 328.594V376C136 380.422 139.594 384 144 384S152 380.422 152 376V328.594C152 316.703 158.312 305.734 168.844 299.766L264.125 239.125C298.594 219.625 320 182.625 320 142.531C320 81.578 271.219 32 211.281 32Z" })
  }
));
QuestionThin.displayName = "QuestionThin";
var Question_default = QuestionThin;
