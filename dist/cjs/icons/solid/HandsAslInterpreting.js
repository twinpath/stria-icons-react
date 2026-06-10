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
var HandsAslInterpreting_exports = {};
__export(HandsAslInterpreting_exports, {
  default: () => HandsAslInterpreting_default
});
module.exports = __toCommonJS(HandsAslInterpreting_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandsAslInterpretingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 240.004C216.938 240.004 232.094 250.723 237.734 266.674C243.625 283.33 261.906 292.064 278.578 286.174C295.234 280.283 303.969 262.002 298.078 245.332C287.236 214.688 262.848 191.562 233.119 181.533L312.797 158.771C329.781 153.912 339.625 136.209 334.766 119.209C329.922 102.225 312.203 92.352 295.203 97.24L196.006 125.582L276.828 56.305C290.25 44.805 291.797 24.602 280.297 11.182C268.781 -2.24 248.562 -3.803 235.172 7.713L134.729 93.807L157.062 45.414C164.453 29.367 157.453 10.354 141.406 2.947C125.391 -4.412 106.359 2.525 98.938 18.602L14.916 206.623C5.082 228.629 0 252.463 0 276.564C0 335.9 48.102 384 107.438 384H207.361C239.234 381.711 268.494 364.643 286.469 337.814C296.297 323.127 292.359 303.252 277.687 293.408C263.031 283.596 243.141 287.502 233.281 302.189C225.812 313.346 213.375 320.002 200 320.002C177.938 320.002 160 302.064 160 280.002C160 257.941 177.938 240.004 200 240.004ZM532.562 128H432.639C400.766 130.289 371.506 147.357 353.531 174.186C343.703 188.873 347.641 208.748 362.313 218.592C376.969 228.404 396.859 224.498 406.719 209.811C414.188 198.654 426.625 191.998 440 191.998C462.062 191.998 480 209.936 480 231.998C480 254.059 462.062 271.996 440 271.996C423.062 271.996 407.906 261.277 402.266 245.326C396.375 228.67 378.094 219.936 361.422 225.826C344.766 231.717 336.031 249.998 341.922 266.668C352.764 297.313 377.152 320.438 406.881 330.467L327.203 353.229C310.219 358.088 300.375 375.791 305.234 392.791C310.078 409.775 327.797 419.648 344.797 414.76L443.994 386.418L363.172 455.695C349.75 467.195 348.203 487.398 359.703 500.818C371.219 514.24 391.438 515.803 404.828 504.287L505.271 418.193L482.938 466.586C475.547 482.633 482.547 501.646 498.594 509.053C514.609 516.412 533.641 509.475 541.063 493.398L625.084 305.377C634.918 283.371 640 259.537 640 235.436C640 176.1 591.898 128 532.562 128Z" })
  }
));
HandsAslInterpretingSolid.displayName = "HandsAslInterpretingSolid";
var HandsAslInterpreting_default = HandsAslInterpretingSolid;
