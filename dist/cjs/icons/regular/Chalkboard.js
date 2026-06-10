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
var Chalkboard_exports = {};
__export(Chalkboard_exports, {
  default: () => Chalkboard_default
});
module.exports = __toCommonJS(Chalkboard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChalkboardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M552 432H416V384C416 366.326 401.674 352 384 352H256C238.326 352 224 366.326 224 384V432H24C10.746 432 0 442.744 0 456C0 469.254 10.746 480 24 480H552C565.254 480 576 469.254 576 456C576 442.744 565.254 432 552 432ZM368 432H272V400H368V432ZM80 88C80 83.594 83.594 80 88 80H488C492.406 80 496 83.594 496 88V400H544V88C544 57.125 518.875 32 488 32H88C57.125 32 32 57.125 32 88V400H80V88Z" })
  }
));
ChalkboardRegular.displayName = "ChalkboardRegular";
var Chalkboard_default = ChalkboardRegular;
