/**
 * Dark Desert Media - Main Interactive Engine
 * Pure vanilla JavaScript with zero external dependencies.
 * Fully compatible with offline local file execution via file:/// protocol.
 */

// Proofreading Redline Dataset
const SAMPLES = {
  before: {
    html: 'All outside contractors and vendors must turn in there W9 form and certificate of insurance (COI) before we pay any invoices in Quickbooks. If a vendors COI is going to expire in less then thirty (30) days the operations coordinator needs to email them. Also make sure that coverage is at least $1,000,000 per occurence, or $2,000,000 for HVAC and electrical work, and upload the PDF to the shared folder labeled "vendors 2026" without forgetting to put the expiration date in the tracker.',
    note: '<strong>Issues Identified (6 defects):</strong> Possessive apostrophe and homophone errors ("there", "vendors"), inconsistent capitalization ("Quickbooks"), grammar ("less then" vs. "fewer than"), spelling ("occurence"), ambiguous passive or colloquial phrasing, and non-standardized file naming convention.'
  },
  redline: {
    html: 'All <span class="del">outside</span> <span class="ins">external</span> contractors and vendors must <span class="del">turn in there W9</span> <span class="ins">submit a signed IRS Form W-9</span> and <span class="ins">a valid</span> <span class="del">certificate of insurance (COI)</span> <span class="ins">Certificate of Insurance (COI)</span> <span class="del">before we pay any invoices in Quickbooks.</span> <span class="ins">prior to invoice release in QuickBooks.</span> If a <span class="del">vendors</span> <span class="ins">vendor&rsquo;s</span> COI <span class="del">is going to expire in less then thirty (30) days the operations coordinator needs to</span> <span class="ins">expires within 30 calendar days, the Operations Coordinator shall</span> <span class="ins">issue an automated renewal notice and log the follow-up date.</span> <span class="del">email them. Also make sure that coverage is at least</span> <span class="ins">Minimum General Liability coverage is</span> $1,000,000 per <span class="del">occurence, or</span> <span class="ins">occurrence ($2,000,000 for</span> HVAC and electrical <span class="del">work, and</span> <span class="ins">trades).</span> <span class="del">upload the PDF to the shared folder labeled "vendors 2026" without forgetting to put the expiration date in the tracker.</span> <span class="ins">Archive each verified PDF under <code>/Compliance/Vendors/[VendorID]_COI_[YYYY-MM-DD].pdf</code> and record the expiration date in the Master Compliance Tracker.</span>',
    note: '<strong>Editorial Actions Applied:</strong> Enforced Chicago Manual of Style and SOP imperative voice; corrected spelling and grammar ("occurrence", "vendor&rsquo;s", "QuickBooks"); standardized regulatory terms ("IRS Form W-9"); added deterministic file-naming schema for zero-defect document control.'
  },
  after: {
    html: 'All external contractors and vendors must submit a signed IRS Form W-9 and a valid Certificate of Insurance (COI) prior to invoice release in QuickBooks. If a vendor&rsquo;s COI expires within 30 calendar days, the Operations Coordinator shall issue an automated renewal notice and log the follow-up date. Minimum General Liability coverage is $1,000,000 per occurrence ($2,000,000 for HVAC and electrical trades). Archive each verified PDF under <code>/Compliance/Vendors/[VendorID]_COI_[YYYY-MM-DD].pdf</code> and record the expiration date in the Master Compliance Tracker.',
    note: '<strong>Publication Ready:</strong> Clear, enforceable, audit-compliant SOP language ready for executive sign-off and automated compliance gating.'
  }
};

/**
 * Switch redline display mode (before / redline / after)
 */
function setMode(mode, btn) {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(b => b.classList.remove('active'));

  if (btn) {
    btn.classList.add('active');
  } else {
    const defaultBtn = document.querySelector(`.tab-btn[data-mode="${mode}"]`);
    if (defaultBtn) defaultBtn.classList.add('active');
  }

  const contentEl = document.getElementById('redline-content');
  const notesEl = document.getElementById('redline-notes');

  if (contentEl && SAMPLES[mode]) {
    contentEl.innerHTML = SAMPLES[mode].html;
  }
  if (notesEl && SAMPLES[mode]) {
    notesEl.innerHTML = SAMPLES[mode].note;
  }
}

/**
 * Filter portfolio cards by discipline
 * @param {string} discipline - 'all' | 'operations' | 'proofreading' | 'gamedev' | 'creative_media'
 */
function filterDiscipline(discipline = 'all') {
  // Update button active state
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    const btnDiscipline = btn.getAttribute('data-discipline');
    if (btnDiscipline === discipline) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Filter individual cards
  const cards = document.querySelectorAll('[data-discipline]');
  cards.forEach(card => {
    // If the element itself is a filter button, skip
    if (card.classList.contains('filter-btn')) return;

    const cardDiscipline = card.getAttribute('data-discipline');
    if (discipline === 'all' || cardDiscipline === discipline) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });

  // Check section visibility: if all cards in a section are hidden, hide the section
  const sections = document.querySelectorAll('section[data-section-discipline]');
  sections.forEach(section => {
    const sectionDiscipline = section.getAttribute('data-section-discipline');
    if (discipline === 'all' || sectionDiscipline === discipline) {
      section.classList.remove('is-hidden');
    } else {
      section.classList.add('is-hidden');
    }
  });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Bind filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const discipline = btn.getAttribute('data-discipline') || 'all';
      filterDiscipline(discipline);
    });
  });

  // Initialize default redline state
  const initialActiveTab = document.querySelector('.tab-btn.active');
  setMode('redline', initialActiveTab);
});
