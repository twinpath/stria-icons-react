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
var PersonSeatReclined_exports = {};
__export(PersonSeatReclined_exports, {
  default: () => PersonSeatReclined_default
});
module.exports = __toCommonJS(PersonSeatReclined_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSeatReclinedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144.007 96C170.517 96 192.005 74.508 192.005 48S170.517 0 144.007 0S96.007 21.492 96.007 48S117.497 96 144.007 96ZM248.001 384H159.675C128.894 384 102.441 362.031 96.769 331.781L63.456 154.094C60.191 136.719 43.519 125.312 26.112 128.562C8.737 131.812 -2.698 148.531 0.552 165.906L33.862 343.594C45.206 404.094 98.128 448 159.675 448H248.001C265.673 448 280.001 433.688 280.001 416S265.673 384 248.001 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416.001 416H390.173L349.97 308.75C345.283 296.281 333.346 288 320.002 288H221.833L215.833 256H296.002C313.676 256 328.002 241.672 328.002 224C328.002 206.326 313.676 192 296.002 192H203.833L199.175 167.156C194.316 141.125 169.301 123.938 143.16 128.812C117.098 133.719 99.942 158.781 104.833 184.844L128.832 312.844C133.145 335.906 153.301 352 175.957 352C177.777 352 179.642 351.703 181.496 351.494C182.367 351.564 183.113 352 184.004 352H297.83L338.033 459.25C342.721 471.719 354.658 480 368.001 480H416.001C433.673 480 448.001 465.688 448.001 448S433.673 416 416.001 416Z" })
    ]
  }
));
PersonSeatReclinedDuotone.displayName = "PersonSeatReclinedDuotone";
var PersonSeatReclined_default = PersonSeatReclinedDuotone;
