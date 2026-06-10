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
const PersonSeatReclinedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144.007 96C170.517 96 192.007 74.508 192.007 48S170.517 0 144.007 0S96.008 21.492 96.008 48S117.498 96 144.007 96ZM416 416H390.173L349.97 308.75C345.282 296.281 333.345 288 320.001 288H221.833L215.833 256H296.002C313.675 256 328.001 241.672 328.001 224C328.001 206.326 313.675 192 296.002 192H203.833L199.175 167.156C194.315 141.125 169.3 123.938 143.16 128.812C117.097 133.719 99.941 158.781 104.832 184.844L128.832 312.844C133.144 335.906 153.3 352 175.956 352C177.776 352 179.642 351.703 181.495 351.494C182.366 351.564 183.112 352 184.003 352H297.83L338.032 459.25C342.72 471.719 354.657 480 368.001 480H416C433.672 480 448 465.688 448 448S433.672 416 416 416ZM248.002 384H159.675C128.894 384 102.441 362.031 96.77 331.781L63.457 154.094C60.192 136.719 43.52 125.312 26.114 128.562C8.739 131.812 -2.698 148.531 0.552 165.906L33.864 343.594C45.208 404.094 98.129 448 159.675 448H248.002C265.674 448 280.002 433.688 280.002 416S265.674 384 248.002 384Z" })
  }
));
PersonSeatReclinedSolid.displayName = "PersonSeatReclinedSolid";
var PersonSeatReclined_default = PersonSeatReclinedSolid;
