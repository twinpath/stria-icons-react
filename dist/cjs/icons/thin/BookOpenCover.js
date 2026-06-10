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
var BookOpenCover_exports = {};
__export(BookOpenCover_exports, {
  default: () => BookOpenCover_default
});
module.exports = __toCommonJS(BookOpenCover_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookOpenCoverThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 32C627.578 32 624 35.578 624 40V410.406C624 421.359 616.531 430.672 605.828 433.047L325.016 495.437C321.734 496.187 318.281 496.187 314.969 495.437L34.172 433.047C23.469 430.672 16 421.359 16 410.406V40C16 35.578 12.422 32 8 32S0 35.578 0 40V410.406C0 428.922 12.625 444.656 30.703 448.672L311.484 511.062C314.266 511.688 317.141 512 320 512S325.719 511.688 328.5 511.062L609.297 448.672C627.375 444.656 640 428.922 640 410.406V40C640 35.578 636.422 32 632 32ZM89.059 396.68L320 448L550.941 396.68C565.584 393.426 576 380.439 576 365.441V39.393C576 17.32 558.01 -0.002 536.693 -0.002C534.686 -0.002 532.646 0.152 530.592 0.471L320 33.062L109.408 0.471C107.355 0.152 105.314 -0.002 103.307 -0.002C81.988 -0.004 64 17.318 64 39.393V365.441C64 380.439 74.418 393.426 89.059 396.68ZM328 48.016L533.039 16.281C534.27 16.092 535.49 15.998 536.693 15.998C549.545 15.998 560 26.492 560 39.393V365.441C560 372.998 554.848 379.422 547.471 381.061L328 429.832V48.016ZM80 39.393C80 33.1 82.457 27.203 86.916 22.789C91.34 18.408 97.16 15.998 103.305 15.998C104.508 15.998 105.73 16.092 106.961 16.281L312 48.016V429.832L92.529 381.061C85.152 379.422 80 372.998 80 365.441V39.393Z" })
  }
));
BookOpenCoverThin.displayName = "BookOpenCoverThin";
var BookOpenCover_default = BookOpenCoverThin;
