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
var PersonCarryBox_exports = {};
__export(PersonCarryBox_exports, {
  default: () => PersonCarryBox_default
});
module.exports = __toCommonJS(PersonCarryBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonCarryBoxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 95.999C106.5 95.999 128 74.5 128 48S106.5 0.001 80 0.001S32 21.501 32 48S53.5 95.999 80 95.999ZM368 95.999H208C199.25 95.999 192 103.249 192 111.999V239.997H158.375L126.25 162.498C117.625 141.624 97.25 127.999 74.625 127.999H56C25.125 127.999 0 153.123 0 183.998V286.246C0 293.996 3 315.745 21.25 330.245L97.75 390.744C103.375 395.244 107.375 401.494 109 408.619L128.625 493.367C131.25 504.867 143 514.617 157.375 511.367C170.25 508.367 178.375 495.492 175.375 482.617L153.999 389.619C151.125 377.244 144.125 366.119 134.125 358.245L96 328.12V214.747L118.25 268.246C123.25 280.246 134.75 287.996 147.75 287.996H368C376.75 287.996 384 280.746 384 271.996V111.999C384 103.249 376.75 95.999 368 95.999ZM336 239.997H240V143.999H336V239.997ZM0 487.992C0 501.242 10.75 511.992 24 511.992S48 501.242 48 487.992V392.119C36 382.619 0.5 354.245 0 353.87V487.992Z" })
  }
));
PersonCarryBoxRegular.displayName = "PersonCarryBoxRegular";
var PersonCarryBox_default = PersonCarryBoxRegular;
