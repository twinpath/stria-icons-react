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
var Films_exports = {};
__export(Films_exports, {
  default: () => Films_default
});
module.exports = __toCommonJS(Films_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilmsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 416C467.578 416 464 419.594 464 424C464 446.062 446.062 464 424 464H72C41.125 464 16 438.875 16 408V152C16 129.938 33.938 112 56 112C60.422 112 64 108.406 64 104S60.422 96 56 96C25.125 96 0 121.125 0 152V408C0 447.688 32.297 480 72 480H424C454.875 480 480 454.875 480 424C480 419.594 476.422 416 472 416ZM528 32H144C117.5 32 96 53.5 96 80V336C96 362.5 117.5 384 144 384H528C554.5 384 576 362.5 576 336V80C576 53.5 554.5 32 528 32ZM208 368H144C126.355 368 112 353.645 112 336V296H208V368ZM208 280H112V216H208V280ZM208 200H112V136H208V200ZM208 120H112V80C112 62.355 126.355 48 144 48H208V120ZM448 368H224V216H448V368ZM448 200H224V48H448V200ZM560 336C560 353.645 545.645 368 528 368H464V296H560V336ZM560 280H464V216H560V280ZM560 200H464V136H560V200ZM560 120H464V48H528C545.645 48 560 62.355 560 80V120Z" })
  }
));
FilmsThin.displayName = "FilmsThin";
var Films_default = FilmsThin;
