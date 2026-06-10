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
var Tree_exports = {};
__export(Tree_exports, {
  default: () => Tree_default
});
module.exports = __toCommonJS(Tree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.608 391.586L370.631 311.986H385.828C411.422 311.986 425.326 282.799 409.016 263.484L348.158 191.98H358.924C380.203 191.98 391.828 169.479 378.203 154.666L243.334 8.156C238.334 2.719 231.178 0 224.022 0S209.711 2.719 204.711 8.156L69.934 154.666C56.34 169.479 67.934 191.98 89.215 191.98H99.949L39.029 263.484C22.717 282.799 36.623 311.986 62.215 311.986H77.414L8.436 391.586C-10.562 413.494 4.623 447.996 33.123 447.996H216.028V503.998C216.028 508.422 219.606 512 224.028 512S232.028 508.422 232.028 503.998V447.996H414.828C443.42 447.996 458.514 413.4 439.608 391.586ZM430.254 421.82C429.164 424.207 424.834 431.994 414.828 431.994H232.028V355.303L293.682 293.643C296.807 290.518 296.807 285.455 293.682 282.33C290.557 279.203 285.494 279.203 282.369 282.33L232.028 332.676V167.979C232.028 163.557 228.449 159.979 224.028 159.979S216.028 163.557 216.028 167.979V268.672L165.686 218.326C162.561 215.199 157.5 215.199 154.375 218.326C151.25 221.451 151.25 226.514 154.375 229.639L216.028 291.299V431.994H33.123C23.147 431.994 18.824 424.221 17.737 421.84C16.574 419.295 13.344 410.35 20.528 402.064L112.451 295.986H62.215C53.68 295.986 50.158 289.832 49.283 287.947C48.219 285.656 46.283 279.693 51.209 273.861L134.602 175.979H89.215C84.377 175.979 81.565 173.5 80.545 171.182C79.369 168.508 80.654 166.648 81.709 165.498L216.488 18.986C218.233 17.088 220.979 16 224.022 16C227.067 16 229.813 17.088 231.565 18.994L366.43 165.498C367.498 166.658 368.781 168.51 367.613 171.172C366.594 173.494 363.776 175.979 358.924 175.979H313.531L396.793 273.809C401.764 279.693 399.826 285.656 398.764 287.947C397.889 289.832 394.367 295.986 385.828 295.986H335.592L427.518 402.066C434.662 410.311 431.418 419.27 430.254 421.82Z" })
  }
));
TreeThin.displayName = "TreeThin";
var Tree_default = TreeThin;
